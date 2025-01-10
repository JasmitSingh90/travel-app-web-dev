import 'package:costartravel/src/ui/support/enums.dart';
import 'package:costartravel/src/ui/support/responsive_utils/responsive_base.dart';
import 'package:costartravel/src/ui/support/responsive_utils/responsive_padding_utils.dart';
import 'package:costartravel/src/ui/support/responsive_utils/responsive_size_utils.dart';
import 'package:costartravel/src/ui/support/responsive_utils/responsive_text_utils.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:costartravel/src/ui/resources/chat_colors.dart';
import 'package:costartravel/src/ui/support/responsive_utils/responsive_widget_utils.dart';

class TrackHistoryWidget extends StatefulWidget {
  final VoidCallback onTrackClickListener;
  final MainAxisAlignment? mainAxisAlignment;
  final bool isRotated;

  const TrackHistoryWidget({
    Key? key,
    required this.onTrackClickListener,
    this.mainAxisAlignment = MainAxisAlignment.spaceBetween,
    required this.isRotated,
  }) : super(key: key);

  @override
  _TrackHistoryWidgetState createState() => _TrackHistoryWidgetState();
}

class _TrackHistoryWidgetState extends State<TrackHistoryWidget>
    with SingleTickerProviderStateMixin {
  @override
  Widget build(BuildContext context) {
    final isMobile = ResponsiveBase.isMobile(context);
    return Padding(
      padding: ResponsivePadding.getResponsiveOnlyPadding(context,
          desktopTop: 45.h, fourKTop: 50.h),
      child: Row(
        mainAxisAlignment: widget.mainAxisAlignment!,
        children: [
          Text(
            "History",
            style: TextStyle(
                fontSize: ResponsiveTextUtils.getResponsiveTextSize(
                  context,
                  mobileFontSize: 18,
                  desktopFontSize: 18,

                ),
                color: isMobile
                    ? ChatColors.historyMobileTextColor
                    : ChatColors.historyDesktopTextColor,
                fontFamily: FontFamily.primaryFont),
          ),
          SizedBox(
            width: ResponsiveSizeUtils.getResponsiveWidth(context,
                mobileWidth: 15, desktopWidth: 10),
          ),
          Padding(
            padding: EdgeInsets.only(top: 3.h),
            child: InkWell(
              onTap: widget.onTrackClickListener,
              child: AnimatedRotation(
                turns:
                    widget.isRotated ? 0.5 : 0, // Adjusted for correct rotation
                duration: const Duration(milliseconds: 300),
                child: Container(
                  width: ResponsiveSizeUtils.getResponsiveWidth(context,
                      mobileWidth: 42, desktopWidth: 60, fourKWidth: 46),
                  height: ResponsiveSizeUtils.getResponsiveHeight(context,
                      mobileHeight: 46, desktopHeight: 60, fourKHeight: 46),
                  padding: ResponsivePadding.getResponsiveAllPadding(context,
                      mobileAllSides: 12, desktopAllSides: 15),
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    border: Border.all(
                      width: ResponsiveSizeUtils.getResponsiveWidth(context,
                          mobileWidth: 2,
                          desktopWidth: 0.9,
                          useProportionalWidth: true),
                      color: ChatColors.circleColor,
                    ),
                  ),
                  child: Center(
                    child: SvgPicture.asset(
                      "assets/images/arrow_up.svg",
                      fit: BoxFit.contain,
                    ),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
