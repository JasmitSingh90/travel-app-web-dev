import 'package:costartravel/src/ui/support/enums.dart';
import 'package:costartravel/src/ui/support/responsive_utils/responsive_padding_utils.dart';
import 'package:costartravel/src/ui/support/responsive_utils/responsive_text_utils.dart';
import 'package:flutter/material.dart';
import 'package:costartravel/src/ui/resources/chat_colors.dart';

class MyMessageWidget extends StatelessWidget {
  final String message;

  const MyMessageWidget({super.key, required this.message});

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.centerRight,
      child: Container(
        margin: ResponsivePadding.getResponsiveOnlyPadding(context,
            allTop: 30, allRight: 20),
        padding: ResponsivePadding.getResponsiveSymmetricPadding(context,
            allHorizontal: 10, allVertical: 10),
        decoration: const BoxDecoration(
          color: ChatColors.kHomeJustTalkColor,
          borderRadius: BorderRadius.only(
            topLeft: Radius.circular(16),
            topRight: Radius.circular(16),
            bottomRight: Radius.circular(4),
            bottomLeft: Radius.circular(16),
          ),
        ),
        constraints: BoxConstraints(
          maxWidth: MediaQuery.of(context).size.width * 0.8,
        ),
        child: Text(
          message,
          style: TextStyle(
              fontSize: ResponsiveTextUtils.getResponsiveTextSize(context,
                  mobileFontSize: 15, desktopFontSize: 15, ),
              color: ChatColors.kChatFontPrimaryColor,
              fontFamily: FontFamily.primaryFont,
              fontWeight: FontWeight.w400),
        ),
      ),
    );
  }
}
