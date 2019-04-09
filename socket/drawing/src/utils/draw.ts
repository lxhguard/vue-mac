/*!
 * Authors:
 *      wangshuai <724656897@qq.com>
 * 2018-10-09
 */
export default class Draw {
    
    private el: string;
    private canvas: any;
    private cxt: any;
    private stageInfo: any; // 元素位置
    private width: number = 2; // 画笔宽度
    private styleColor: string = "#000";
    private path: any =
    {
        beginX: 0,
        beginY: 0,
        endX: 0,
        endY: 0
    };
    
    public constructor(el: string)
    {
        this.el = el;
        this.canvas = document.getElementById(this.el);
        this.cxt = this.canvas.getContext("2d");
        this.stageInfo = this.canvas.getBoundingClientRect();
    }

    /**
     * 初始化。
     * @private
     * @returns {void}
     */
    public init(ws: any, btn: any): void
    {
        this.canvas.onmousedown = () =>
        {
            this.drawBegin(event, ws);
        };

        this.canvas.onmouseup = () =>
        {
            this.drawEnd();
        };
        this.clearCanvas(ws, btn);
    }

    /**
     * 修改颜色。
     * @protected
     * @returns {void}
     */
    protected setStyleColor(val: string): void
    {
        this.styleColor = val;
    }
    
    /**
     * 修改画笔宽度。
     * @protected
     * @returns {void}
     */
    protected setWidth(val: number): void
    {
        this.width = val;
    }

    /**
     * 记录开始位置。
     * @protected
     * @returns {void}
     */
    protected drawBegin(e: any, ws: any): void
    {
        const self: any = this;
        this.cxt.beginPath();
        this.cxt.moveTo(
            e.clientX,
            e.clientY
        );
        this.path.beginX = e.clientX;
        this.path.beginY = e.clientY;
        // 记录开始点位置
        ws.emit("begin", e);
        this.canvas.onmousemove = () =>
        {
            self.drawing(event, ws);
        };
    }

    /**
     * 记录开始位置。
     * @protected
     * @returns {void}
     */
    protected drawing(e: any, ws: any): void
    {
        const self: any = this;
        self.cxt.strokeStyle = self.styleColor;
        self.cxt.lineWidth = self.width;
        self.cxt.lineTo(
            e.clientX,
            e.clientY
        );
        // 记录终点
        self.path.endX = e.clientX;
        self.path.endY = e.clientY;
        self.path.lineWidth = self.width;
        self.path.styleColor = self.styleColor;
        // 把位图坐标发送到服务器
        ws.emit("pathData", self.path);

        self.cxt.stroke();
    }

    /**
     * 结束画图,清除相关事件。
     * @protected
     * @returns {void}
     */
    protected drawEnd(): void
    {
        const self: any = this;
        this.canvas.onmousemove = null;
    }

    /**
     * 清除画布。
     * @protected
     * @returns {void}
     */
    protected clearCanvas(ws, btn: HTMLElement)
    {
        let self: any = this;
        // 点击按钮清空画布
        btn.onclick = () =>
        {
            self.cxt.clearRect(0, 0, self.canvas.width, self.canvas.height);
            ws.emit("clear");
        };
    }
}

// export { Draw };
