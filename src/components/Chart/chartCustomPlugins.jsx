import { Colors } from "./Chart.styled";
import { ACT_LINE_NAME } from "./chartData";

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
      let positionLableTextX = meta.data.length > 1 ? -39 : 17;
      let positionLableTextY = meta.data.length > 1 ? -24 : 0;

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
      ctx.fillText(
        meta._dataset.label,
        meta.data[meta.data.length - 1].x + positionLableTextX,
        meta.data[meta.data.length - 1].y + positionLableTextY
      );
    });
  },
};

//customPagesValue
export const customPagesValue = {
  id: "customPagesValue",

  beforeDatasetsDraw(chart, args, pluginOptions) {
    const {
      ctx,
      data,
      legend: { legendItems },
      tooltip: { _active },
    } = chart;
    let defaulNumbersValue = "0";

    ctx.save();

    ctx.beginPath();
    //rect
    ctx.fillStyle = Colors.lightGray;
    ctx.fillRect(195, 0, 25, 25);
    ctx.fill();

    //text
    ctx.fillStyle = Colors.grayBlue;
    ctx.textBaseline = "middle";
    ctx.font = "500 12px Montserrat";
    ctx.fillText("КІЛЬКІСТЬ СТОРІНОК / ДЕНЬ", 3, 13);
    ctx.fill();

    if (!_active[0]) {
      ctx.fillStyle = Colors.grayBlue;
      ctx.textBaseline = "middle";
      ctx.font = "bold 12px Montserrat";
      ctx.fillText(defaulNumbersValue, 203, 13);
      ctx.fill();
    }

    if (_active[0]) {
      legendItems.forEach((item, index) => {
        if (item.text === ACT_LINE_NAME) {
          ctx.fillStyle = Colors.grayBlue;
          ctx.font = "bold 12px Montserrat";
          ctx.fillText(
            `${data.datasets[index].data[_active[0].index]}`,
            203,
            13
          );
        }
      });
    }
  },
};
