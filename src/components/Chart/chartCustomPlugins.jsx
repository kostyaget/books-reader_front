import { Colors } from "./Chart.styled";
import { PLAN_LINE_NAME } from "./Chart";
import { planNumber } from "./Chart";

export const customBorder = {
  id: "customBorder",
  beforeDatasetsDraw(chart, args, options) {
    const {
      ctx,
      chartArea: { top, bottom, left, right, width, height },
    } = chart;
    ctx.save();

    ctx.strokeStyle = options.borderColor;
    ctx.strokeRect(left, top, 0, height);
    ctx.strokeRect(left, bottom, width, 0);
    ctx.strokeRect(right, top, 0, height);
    ctx.restore();
  },
};

//customNameLine
export const customNameLine = {
  id: "customNameLine",
  afterDraw: (chart, args, options) => {
    const { _metasets, ctx } = chart;
    ctx.save();

    _metasets.forEach((meta) => {
      ctx.beginPath();
      //rect
      ctx.fillStyle = Colors.lightGray;
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 3;
      ctx.shadowColor = "rgba(9, 30, 63, 0.1)";

      let bgPositionLableX = meta.data.length > 1 ? -48 : 10;
      let bgPositionLableY = meta.data.length > 1 ? -40 : -17;
      let positionLableTextX = meta.data.length > 1 ? -23 : 35;
      let positionLableTextY = meta.data.length > 1 ? -24 : -1;

      ctx.fillRect(
        meta.data[meta.data.length - 1].x + bgPositionLableX,
        meta.data[meta.data.length - 1].y + bgPositionLableY,
        50,
        30
      );
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.fill();
      ctx.restore();

      ctx.font = "bolder 12px Arial";
      ctx.fillStyle = Colors.dark;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillText(
        meta._dataset.label,
        meta.data[meta.data.length - 1].x + positionLableTextX,
        meta.data[meta.data.length - 1].y + positionLableTextY
      );
      ctx.textAlign = "left";
    });
  },
};

//customPagesValue
export const customPagesValue = {
  id: "customPagesValue",

  beforeDatasetsDraw(chart, args, pluginOptions) {
    const { ctx, data } = chart;
    ctx.save();

    ctx.beginPath();
    //rect
    ctx.fillStyle = Colors.lightGray;
    ctx.fillRect(165, 0, 25, 25);
    ctx.fill();

    //text
    ctx.fillStyle = Colors.grayBlue;
    ctx.textBaseline = "middle";
    ctx.font = "500 12px Montserrat";
    ctx.fillText("AMOUNT OF PAGES / DAY", 3, 13);
    ctx.fill();

    data.datasets.forEach((item, index) => {
      if (item.label === PLAN_LINE_NAME) {
        const value = planNumber;
        const ifValue = planNumber.toString().length;
        if (ifValue > 1) {
          let bgPagesLength = 25;
          if (ifValue === 2) {
            bgPagesLength = 32;
          }
          if (ifValue >= 3) {
            bgPagesLength = 39;
          }
          ctx.fillStyle = Colors.lightGray;
          ctx.fillRect(165, 0, bgPagesLength, 25);
          ctx.fill();
        }

        ctx.fillStyle = Colors.grayBlue;
        ctx.font = "bold 12px Montserrat";
        ctx.fillText(value || 0, 174, 13);
      }
    });
  },
};
