import 'package:costartravel/src/ui/support/connectivitiy_service/connectivity_service.dart';
import 'package:costartravel/src/ui/support/enums.dart';
import 'package:costartravel/src/ui/support/responsive_utils/responsive_padding_utils.dart';
import 'package:costartravel/src/ui/support/responsive_utils/responsive_size_utils.dart';
import 'package:costartravel/src/ui/support/responsive_utils/responsive_text_utils.dart';
import 'package:flutter/material.dart';
import 'package:costartravel/src/support/enums.dart';
import 'package:costartravel/src/ui/resources/chat_colors.dart';
import 'package:costartravel/src/ui/chat/bloc/chat_bloc.dart';
import 'package:costartravel/src/ui/chat/bloc/events/chat_event.dart';
import 'package:costartravel/src/ui/support/widgets/custom_message.dart';

class ChatFieldWidget extends StatefulWidget {
  final ChatBloc chatBloc;
  final Function(bool) typingAnimationFunction;
  final Function({bool performForceScroll, bool performScrollForImage})
      scrollListToEnd;
  final Function(bool isSet) setFocusStatus;

  const ChatFieldWidget({
    super.key,
    required this.chatBloc,
    required this.typingAnimationFunction,
    required this.scrollListToEnd,
    required this.setFocusStatus,
  });

  @override
  _ChatFieldWidgetState createState() => _ChatFieldWidgetState();
}

class _ChatFieldWidgetState extends State<ChatFieldWidget>
    with SingleTickerProviderStateMixin {
  final TextEditingController _chatTextController = TextEditingController();
  final ScrollController _scrollController = ScrollController();
  final FocusNode _focusNode = FocusNode();
  bool _isAnimating = true;

  late AnimationController _animationController;
  late Animation<Offset> _slideAnimation;
  bool isExpanded = false;

  @override
  void initState() {
    super.initState();

    // Initialize the animation controller and animation
    _animationController = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 2), // Animation duration
    );

    _slideAnimation = Tween<Offset>(
      begin: const Offset(0, 2), // Start off-screen
      end: Offset.zero, // End at original position
    ).animate(
      CurvedAnimation(
        parent: _animationController,
        curve: Curves.easeOut,
      ),
    );

    Future.delayed(const Duration(seconds: 1), () {
      _animationController.forward().then((_) {
        setState(() {
          _isAnimating = false;
        });
      });
    });
    _focusNode.addListener(_handleFocusChange);
  }

  void _handleFocusChange() {
    setState(() {
      isExpanded = _focusNode.hasFocus;
    });
    widget.setFocusStatus(_focusNode.hasFocus);
    if (!_focusNode.hasFocus) {
      _scrollController.jumpTo(0);
    }
  }

  Future<void> _sendMessage() async {
    if (_chatTextController.text.trim().isEmpty) return;

    try {
      if (ConnectivityService.getInstance.isConnected) {
        final message = _chatTextController.text.trim();
        _chatTextController.clear();
        _focusNode.unfocus();
        widget.typingAnimationFunction(false);

        widget.chatBloc.isMessageSent = true;

        widget.chatBloc.add(SendMessage(
          message,
          translatedMessage: message,
          chatDataType: ChatDataType.message,
        ));

        widget.scrollListToEnd(performForceScroll: true);
      } else {
        showCustomMessage('There is an issue with your Connectivity, pls check',
            context: context);
      }
    } catch (e) {
      showCustomMessage('Error while sending message', context: context);
    }
  }

  void _toggleImageSelection() {
    print("Image selection triggered");
  }

  @override
  Widget build(BuildContext context) {
    final maxHeight = ResponsiveSizeUtils.getResponsiveHeight(context,
        mobileHeight: 100, tabletHeight: 150, desktopHeight: 150,);
    // final isSmallMobile = MediaQuery.of(context).size.height <= 750;
    return Expanded(
      child: SlideTransition(
        position: _slideAnimation, // Use slide animation
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 300),
          constraints: BoxConstraints(
            maxHeight: isExpanded
                ? maxHeight
                : ResponsiveSizeUtils.getResponsiveHeight(context,
                    mobileHeight: 50, desktopHeight: 70,fourKHeight: 55),
          ),
          decoration: BoxDecoration(
            color: Colors.white60,
            borderRadius: BorderRadius.circular(
                ResponsiveSizeUtils.getResponsiveRadius(context,
                    mobileRadius: 35, desktopRadius: 50)),
          ),
          child: TextField(
            style: TextStyle(
                fontSize: ResponsiveTextUtils.getResponsiveTextSize(context,
                    mobileFontSize: 15.5,
                    desktopFontSize: 15,
                    ),
                fontFamily: FontFamily.primaryFont,
                fontWeight: FontWeight.w400),
            enabled: !_isAnimating,
            controller: _chatTextController,
            focusNode: _focusNode,
            cursorHeight:
                ResponsiveSizeUtils.getResponsiveHeight(context, allHeight: 14),
            minLines: 1,
            maxLines: isExpanded ? null : 1,
            textAlignVertical: TextAlignVertical.center,
            keyboardType: TextInputType.multiline,
            textInputAction: TextInputAction.send,
            onSubmitted: (_) => _sendMessage(),
            decoration: InputDecoration(
              hintText: "How can I help you?",
              hintStyle: TextStyle(
                  color: ChatColors.homeTextBoxFontColor,
                  fontSize: ResponsiveTextUtils.getResponsiveTextSize(context,
                      mobileFontSize: 15.5,
                      desktopFontSize: 15,
                   ),
                  fontFamily: FontFamily.primaryFont,
                  fontWeight: FontWeight.w400,
                  height: ResponsiveSizeUtils.getResponsiveHeight(context,
                      allHeight: 1)),
              contentPadding: ResponsivePadding.getResponsivePadding(
                context,
                mobileEdgeInsets: const EdgeInsets.only(
                    left: 18, right: 18, top: 15, bottom: 15),
                desktopEdgeInsets: const EdgeInsets.only(
                  left: 20,
                  right: 20,
                  top: 18,
                  bottom: 19,
                ),
                fourKEdgeInsets: const EdgeInsets.only(
                    left: 20, right: 20, top: 19, bottom: 19),
              ),
              border: InputBorder.none,
              suffixIcon: Wrap(
                alignment: WrapAlignment.center,
                crossAxisAlignment: WrapCrossAlignment.center,
                runAlignment: WrapAlignment.center,
                children: [
                  InkWell(
                    onTap: () {},
                    child: SizedBox(
                      height: ResponsiveSizeUtils.getResponsiveHeight(context,
                          mobileHeight: 43, desktopHeight: 60, fourKHeight: 48),
                      child: Image.asset(
                        "assets/images/chat_field_image.png",
                      ),
                    ),
                  ),
                  InkWell(
                    onTap: () {},
                    child: SizedBox(
                      height: ResponsiveSizeUtils.getResponsiveHeight(context,
                          mobileHeight: 43, desktopHeight: 60, fourKHeight: 48),
                      child: Image.asset("assets/images/video_field_image.png"),
                    ),
                  ),
                  SizedBox(
                    width: ResponsiveSizeUtils.getResponsiveWidth(context,
                        allWidth: 8),
                    height: ResponsiveSizeUtils.getResponsiveHeight(context,
                        allHeight: 8),
                  )
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  @override
  void dispose() {
    _focusNode.removeListener(_handleFocusChange);
    _scrollController.dispose();
    _chatTextController.dispose();
    _focusNode.dispose();
    _animationController.dispose(); // Dispose the animation controller
    super.dispose();
  }
}
