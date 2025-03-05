import 'package:costartravel/src/ui/home/presentation/cubit/microphone/microphone_cubit.dart';
import 'package:costartravel/src/ui/resources/chat_colors.dart';
import 'package:costartravel/src/ui/support/connectivitiy_service/connectivity_service.dart';
import 'package:costartravel/src/ui/support/responsive_utils/responsive_size_utils.dart';
import 'package:costartravel/src/ui/support/widgets/custom_message.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class MicrophoneWidget extends StatefulWidget {
  final bool animateOnInit;
  const MicrophoneWidget({Key? key, this.animateOnInit = true}) : super(key: key);

  @override
  State<MicrophoneWidget> createState() => _MicrophoneWidgetState();
}

class _MicrophoneWidgetState extends State<MicrophoneWidget>
    with SingleTickerProviderStateMixin {
  late AnimationController _animationController;
  late Animation<Offset> _slideAnimation;

  @override
  void initState() {
    super.initState();

    _animationController = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 2),
    );

    _slideAnimation = Tween<Offset>(
      begin: const Offset(0, 2), // Start off-screen
      end: Offset.zero,         // End at original position
    ).animate(
      CurvedAnimation(
        parent: _animationController,
        curve: Curves.easeOut,
      ),
    );

    // If we want to animate on init, run the animation; otherwise, set it complete.
    if (widget.animateOnInit) {
      Future.delayed(const Duration(seconds: 1), () {
        _animationController.forward();
      });
    } else {
      _animationController.value = 1.0;
    }
  }

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final microphoneProvider = BlocProvider.of<MicrophoneCubit>(context);

    return SlideTransition(
      position: _slideAnimation,
      child: BlocBuilder<MicrophoneCubit, MicrophoneState>(
        builder: (context, state) {
          return Column(
            children: [
              InkWell(
                onTap: () {
                  if (ConnectivityService.getInstance.isConnected) {
                    microphoneProvider.toggleMicrophone();
                  } else {
                    showCustomMessage(
                      'There is an issue with your Connectivity, pls check',
                      context: context,
                    );
                  }
                },
                child: Container(
                  width: ResponsiveSizeUtils.getResponsiveWidth(
                    context,
                    mobileWidth: 46,
                    desktopWidth: 60,
                    fourKWidth: 52,
                  ),
                  height: ResponsiveSizeUtils.getResponsiveHeight(
                    context,
                    mobileHeight: 46,
                    desktopHeight: 60,
                    fourKHeight: 52,
                  ),
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: ChatColors.color5520F6,
                    border: Border.all(
                      width: ResponsiveSizeUtils.getResponsiveWidth(
                        context,
                        allWidth: 2,
                        useProportionalWidth: true,
                      ),
                      color: Colors.purpleAccent.withOpacity(.3),
                    ),
                    boxShadow: [
                      BoxShadow(
                        color: ChatColors.color5520F6.withOpacity(.3),
                        offset: const Offset(0, 2),
                        blurRadius: 4,
                      ),
                    ],
                  ),
                  child: Icon(
                    Icons.mic,
                    color: Colors.white,
                    size: ResponsiveSizeUtils.getResponsiveHeight(
                      context,
                      mobileHeight: 20,
                      desktopHeight: 28,
                      fourKHeight: 24,
                    ),
                  ),
                ),
              ),
            ],
          );
        },
      ),
    );
  }
}
