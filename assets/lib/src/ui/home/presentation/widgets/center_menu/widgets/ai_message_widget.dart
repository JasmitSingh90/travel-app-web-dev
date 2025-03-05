import 'dart:async';

import 'package:costartravel/src/ui/resources/chat_colors.dart';
import 'package:costartravel/src/ui/support/enums.dart';
import 'package:costartravel/src/ui/support/responsive_utils/responsive_padding_utils.dart';
import 'package:costartravel/src/ui/support/responsive_utils/responsive_size_utils.dart';
import 'package:costartravel/src/ui/support/responsive_utils/responsive_text_utils.dart';
import 'package:flutter/material.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class AiMessageWidget extends StatefulWidget {
  final String message;
  final String? errorMessage; // Optional error message
  final bool useAnimation;
  final ValueChanged<bool>? onTypingComplete;

  /// New: Callback for retry
  final VoidCallback? onRetry;

  const AiMessageWidget({
    Key? key,
    required this.message,
    this.errorMessage,
    this.useAnimation = true,
    this.onTypingComplete,
    this.onRetry, // Provide a function to resend the message
  }) : super(key: key);

  @override
  State<AiMessageWidget> createState() => _AiMessageWidgetState();
}

class _AiMessageWidgetState extends State<AiMessageWidget> {
  List<String> words = [];
  int currentWordIndex = 0;
  String displayedMessage = "";
  Timer? timer;
  bool isTypingCompleted = false;

  @override
  void initState() {
    super.initState();
    _initializeWords(widget.message);

    if (widget.useAnimation) {
      _startTyping();
    } else {
      displayedMessage = widget.message;
      currentWordIndex = words.length;
      _notifyComplete();
    }
  }

  void _initializeWords(String text) {
    final newWords = text.split(' ');

    if (newWords.length > words.length) {
      final additionalWords = newWords.sublist(words.length);
      words.addAll(additionalWords);
    }
  }

  void _startTyping() {
    timer?.cancel();
    timer = Timer.periodic(const Duration(milliseconds: 80), (t) {
      if (currentWordIndex < words.length) {
        setState(() {
          if (displayedMessage.isEmpty) {
            displayedMessage = words[currentWordIndex];
          } else {
            displayedMessage += " ${words[currentWordIndex]}";
          }
          currentWordIndex++;
        });

        if (currentWordIndex == words.length) {
          _notifyComplete();
          isTypingCompleted = true;
        } else {
          _notifyProgress();
        }
      } else {
        t.cancel();
      }
    });
  }

  void _notifyComplete() {
    widget.onTypingComplete?.call(true);
  }

  void _notifyProgress() {
    widget.onTypingComplete?.call(false);
  }

  @override
  void didUpdateWidget(AiMessageWidget oldWidget) {
    super.didUpdateWidget(oldWidget);

    if (oldWidget.message != widget.message) {
      final oldWordCount = words.length;
      _initializeWords(widget.message);

      if (words.length > oldWordCount && widget.useAnimation) {
        if (!isTypingCompleted) {
          _startTyping();
        } else {
          setState(() {
            currentWordIndex = oldWordCount;
            isTypingCompleted = false;
          });
          _startTyping();
        }
      } else if (!widget.useAnimation) {
        setState(() {
          displayedMessage = widget.message;
          currentWordIndex = words.length;
        });
        _notifyComplete();
      }
    }
  }

  @override
  void dispose() {
    timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (widget.errorMessage != null && widget.errorMessage!.trim().isNotEmpty) {
      return _buildErrorMessage();
    }

    if (widget.message.trim().isEmpty) {
      return const SizedBox.shrink();
    }

    return _buildMessage();
  }

  Widget _buildErrorMessage() {
    return Padding(
      padding: ResponsivePadding.getResponsiveOnlyPadding(context, allLeft: 10.w, allRight: 20.w),
      child: Align(
        alignment: Alignment.centerLeft,
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildAiIcon(),
            const SizedBox(width: 10.0),
            Flexible(
              child: Text(
                widget.errorMessage!,
                style: TextStyle(
                  color: Colors.red,
                  fontSize: ResponsiveTextUtils.getResponsiveTextSize(context, mobileFontSize: 13, desktopFontSize: 11, fourKFontSize: 13),
                  fontWeight: FontWeight.w400,
                ),
              ),
            ),
            const SizedBox(width: 8),
            if (widget.onRetry != null)
              InkWell(
                onTap: widget.onRetry,
                child: const Icon(Icons.refresh, size: 16, color: Colors.red),
              ),
          ],
        ),
      ),
    );
  }

  Widget _buildMessage() {
    return Padding(
      padding: ResponsivePadding.getResponsiveOnlyPadding(context, allLeft: 10.w, allRight: 20.w),
      child: Align(
        alignment: Alignment.centerLeft,
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildAiIcon(),
            const SizedBox(width: 10.0),
            Expanded(
              child: MarkdownBody(
                data: displayedMessage,
                styleSheet: MarkdownStyleSheet(
                  p: TextStyle(
                    fontSize: ResponsiveTextUtils.getResponsiveTextSize(context, mobileFontSize: 13, desktopFontSize: 13, tabletFontSize: 16),
                    fontWeight: FontWeight.w400,
                    color: ChatColors.kChatFontSecondaryColor,
                    fontFamily: FontFamily.primaryFont,
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildAiIcon() {
    return SizedBox(
      width: ResponsiveSizeUtils.getResponsiveWidth(context, mobileWidth: 20, desktopWidth: 25),
      height: ResponsiveSizeUtils.getResponsiveHeight(context, mobileHeight: 20, desktopHeight: 25),
      child: Image.asset("assets/images/ai_sparkles.png"),
    );
  }
}


// import 'dart:async';
// import 'package:flutter/material.dart';
// import 'package:flutter_markdown/flutter_markdown.dart';
// import 'package:flutter_screenutil/flutter_screenutil.dart';
//
// class AiMessageWidget extends StatefulWidget {
//   final String message;
//   final bool useAnimation;
//
//   const AiMessageWidget({
//     super.key,
//     required this.message,
//     this.useAnimation = true,
//   });
//
//   @override
//   State<AiMessageWidget> createState() => _AiMessageWidgetState();
// }
//
// class _AiMessageWidgetState extends State<AiMessageWidget>
//     with TickerProviderStateMixin {
//   late List<String> words;
//   late List<AnimationController> controllers;
//   late List<Animation<double>> fadeAnimations;
//   int currentWordIndex = 0;
//   Timer? timer;
//   bool isTypingComplete = false;
//
//   @override
//   void initState() {
//     super.initState();
//     _initializeWords();
//     _setupAnimations();
//     if (widget.useAnimation) {
//       _startTyping();
//     } else {
//       currentWordIndex = words.length; // Show all words at once
//       isTypingComplete = true;
//     }
//   }
//
//   void _initializeWords() {
//     words = widget.message.split(' '); // Split the message into words
//   }
//
//   void _setupAnimations() {
//     controllers = List.generate(
//       words.length,
//           (_) => AnimationController(
//         vsync: this,
//         duration: const Duration(milliseconds: 300), // Adjust duration for fade-in
//       ),
//     );
//
//     fadeAnimations = controllers
//         .map(
//           (controller) => Tween<double>(begin: 0.0, end: 1.0).animate(
//         CurvedAnimation(parent: controller, curve: Curves.easeIn),
//       ),
//     )
//         .toList();
//   }
//
//   void _startTyping() {
//     currentWordIndex = 0;
//     isTypingComplete = false;
//
//     timer = Timer.periodic(
//       const Duration(milliseconds: 300), // Adjust word reveal speed
//           (timer) {
//         if (currentWordIndex < words.length) {
//           controllers[currentWordIndex].forward(); // Trigger fade-in for the word
//           currentWordIndex++;
//           setState(() {}); // Update UI to display the next word
//         } else {
//           timer.cancel();
//           isTypingComplete = true;
//         }
//       },
//     );
//   }
//
//   @override
//   void didUpdateWidget(AiMessageWidget oldWidget) {
//     super.didUpdateWidget(oldWidget);
//     if (oldWidget.message != widget.message || oldWidget.useAnimation != widget.useAnimation) {
//       timer?.cancel();
//       _disposeControllers();
//       _initializeWords();
//       _setupAnimations();
//       if (widget.useAnimation) {
//         _startTyping();
//       } else {
//         setState(() {
//           currentWordIndex = words.length;
//           isTypingComplete = true;
//         });
//       }
//     }
//   }
//
//   void _disposeControllers() {
//     for (var controller in controllers) {
//       controller.dispose();
//     }
//   }
//
//   @override
//   void dispose() {
//     timer?.cancel();
//     _disposeControllers();
//     super.dispose();
//   }
//
//   @override
//   Widget build(BuildContext context) {
//     final isMobile = MediaQuery.of(context).size.width < 600;
//
//     if (widget.message.trim().isEmpty) {
//       return const SizedBox.shrink();
//     }
//
//     return Align(
//       alignment: Alignment.centerLeft,
//       child: Row(
//         crossAxisAlignment: CrossAxisAlignment.start,
//         children: [
//           // Sparkle icon
//           SizedBox(
//             width: isMobile ? 20.w : 25.w,
//             height: isMobile ? 20.h : 25.h,
//             child: Image.asset("assets/images/ai_sparkles.png"),
//           ),
//           SizedBox(width: 10.w),
//           Expanded(
//             child: Wrap(
//               spacing: 4.0, // Add spacing between words
//               runSpacing: 3.0, // Add spacing between lines
//               children: List.generate(
//                 words.length,
//                     (index) => AnimatedBuilder(
//                   animation: fadeAnimations[index],
//                   builder: (context, child) {
//                     return Opacity(
//                       opacity: fadeAnimations[index].value,
//                       child: Text(
//                         words[index],
//                         style: TextStyle(fontSize: 15.sp),
//                       ),
//                     );
//                   },
//                 ),
//               ).take(currentWordIndex).toList(), // Only show revealed words
//             ),
//           ),
//         ],
//       ),
//     );
//   }
// }

// import 'dart:async';
// import 'package:flutter/material.dart';
// import 'package:flutter_markdown/flutter_markdown.dart';
// import 'package:flutter_screenutil/flutter_screenutil.dart';
//
// class AiMessageWidget extends StatefulWidget {
//   final String message;
//   final bool useAnimation;
//
//   const AiMessageWidget({
//     super.key,
//     required this.message,
//     this.useAnimation = true,
//   });
//
//   @override
//   State<AiMessageWidget> createState() => _AiMessageWidgetState();
// }
//
// class _AiMessageWidgetState extends State<AiMessageWidget>
//     with TickerProviderStateMixin {
//   late List<String> words;
//   late List<AnimationController> controllers;
//   late List<Animation<double>> fadeAnimations;
//   int currentWordIndex = 0;
//   Timer? timer;
//   bool isTypingComplete = false;
//
//   @override
//   void initState() {
//     super.initState();
//     _initializeWords();
//     _setupAnimations();
//     if (widget.useAnimation) {
//       _startTyping();
//     } else {
//       currentWordIndex = words.length; // Show all words at once
//       isTypingComplete = true;
//     }
//   }
//
//   void _initializeWords() {
//     words = widget.message.split(' '); // Split the message into words
//   }
//
//   void _setupAnimations() {
//     controllers = List.generate(
//       words.length,
//           (_) => AnimationController(
//         vsync: this,
//         duration: const Duration(milliseconds: 300), // Adjust duration for fade-in
//       ),
//     );
//
//     fadeAnimations = controllers
//         .map(
//           (controller) => Tween<double>(begin: 0.0, end: 1.0).animate(
//         CurvedAnimation(parent: controller, curve: Curves.easeIn),
//       ),
//     )
//         .toList();
//   }
//
//   void _startTyping() {
//     currentWordIndex = 0;
//     isTypingComplete = false;
//
//     timer = Timer.periodic(
//       const Duration(milliseconds: 300), // Adjust word reveal speed
//           (timer) {
//         if (currentWordIndex < words.length) {
//           controllers[currentWordIndex].forward(); // Trigger fade-in for the word
//           currentWordIndex++;
//           setState(() {}); // Update UI to display the next word
//         } else {
//           timer.cancel();
//           isTypingComplete = true;
//         }
//       },
//     );
//   }
//
//   @override
//   void didUpdateWidget(AiMessageWidget oldWidget) {
//     super.didUpdateWidget(oldWidget);
//     if (oldWidget.message != widget.message || oldWidget.useAnimation != widget.useAnimation) {
//       timer?.cancel();
//       _disposeControllers();
//       _initializeWords();
//       _setupAnimations();
//       if (widget.useAnimation) {
//         _startTyping();
//       } else {
//         setState(() {
//           currentWordIndex = words.length;
//           isTypingComplete = true;
//         });
//       }
//     }
//   }
//
//   void _disposeControllers() {
//     for (var controller in controllers) {
//       controller.dispose();
//     }
//   }
//
//   @override
//   void dispose() {
//     timer?.cancel();
//     _disposeControllers();
//     super.dispose();
//   }
//
//   @override
//   Widget build(BuildContext context) {
//     final isMobile = MediaQuery.of(context).size.width < 600;
//
//     if (widget.message.trim().isEmpty) {
//       return const SizedBox.shrink();
//     }
//
//     return Align(
//       alignment: Alignment.centerLeft,
//       child: Row(
//         crossAxisAlignment: CrossAxisAlignment.start,
//         children: [
//           // Sparkle icon
//           SizedBox(
//             width: isMobile ? 20.w : 25.w,
//             height: isMobile ? 20.h : 25.h,
//             child: Image.asset("assets/images/ai_sparkles.png"),
//           ),
//           SizedBox(width: 10.w),
//           Expanded(
//             child: Wrap(
//               spacing: 4.0, // Add spacing between words
//               runSpacing: 3.0, // Add spacing between lines
//               children: List.generate(
//                 words.length,
//                     (index) => AnimatedBuilder(
//                   animation: fadeAnimations[index],
//                   builder: (context, child) {
//                     return Opacity(
//                       opacity: fadeAnimations[index].value,
//                       child: Text(
//                         words[index],
//                         style: TextStyle(fontSize: 15.sp),
//                       ),
//                     );
//                   },
//                 ),
//               ).take(currentWordIndex).toList(), // Only show revealed words
//             ),
//           ),
//         ],
//       ),
//     );
//   }
// }
