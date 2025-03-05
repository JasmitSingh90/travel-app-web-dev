import 'package:costartravel/src/ui/resources/chat_colors.dart';
import 'package:costartravel/src/ui/support/enums.dart';
import 'package:costartravel/src/ui/support/responsive_utils/responsive_base.dart';
import 'package:costartravel/src/ui/support/responsive_utils/responsive_padding_utils.dart';
import 'package:costartravel/src/ui/support/responsive_utils/responsive_size_utils.dart';
import 'package:costartravel/src/ui/support/responsive_utils/responsive_text_utils.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class TrackHistoryWidget extends StatefulWidget {
  final VoidCallback onTrackClickListener;
  final MainAxisAlignment? mainAxisAlignment;
  final String title;
  final bool isRotated;
  final VoidCallback? onTapHistory;

  const TrackHistoryWidget({
    Key? key,
    required this.onTrackClickListener,
    this.title = "History",
    this.mainAxisAlignment = MainAxisAlignment.spaceBetween,
    required this.isRotated,
    this.onTapHistory,
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
          desktopTop: 45.h, fourKTop: 50.h, tabletTop: 50),
      child: Row(
        mainAxisAlignment: widget.mainAxisAlignment!,
        children: [
          Padding(
            padding: ResponsivePadding.getResponsiveOnlyPadding(context,
                tabletLeft: 75),
            child: GestureDetector(
              onTap: widget.onTapHistory,
              child: Text(
                widget.title,
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
            ),
          ),
          SizedBox(
            width: ResponsiveSizeUtils.getResponsiveWidth(
              context,
              mobileWidth: 15,
              desktopWidth: 10,
              tabletWidth: 20,
            ),
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
                  width: ResponsiveSizeUtils.getResponsiveWidth(
                    context,
                    mobileWidth: 42,
                    desktopWidth: 60,
                    fourKWidth: 46,
                    tabletWidth: 46,
                  ),
                  height: ResponsiveSizeUtils.getResponsiveHeight(
                    context,
                    mobileHeight: 46,
                    desktopHeight: 60,
                    fourKHeight: 46,
                    tabletHeight: 46,
                  ),
                  padding: ResponsivePadding.getResponsiveAllPadding(
                    context,
                    mobileAllSides: 12,
                    desktopAllSides: 15,
                    tabletAllSides: 12,
                  ),
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
                    child: Image.asset(
                      "assets/images/arrow_down.png",
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
