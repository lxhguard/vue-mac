<template>
<div class="draw-view">
	<canvas id="canvas" ref="canvas" v-show="userName === 'admin'"></canvas>
	<canvas id="showCanvas" ref="showCanvas" v-show="!(userName === 'admin')"></canvas>
    <!-- 工具栏BEGIN -->
	<div class="utils" v-show="userName === 'admin'">
        <div class="utils-wrapper">
            <ul class="brush-size">
                <li class="big" v-for="item in widths" :class="{'active': selectWidth === item}" :key="item" :style="{width: item + 10 + 'px',height:item + 10 + 'px'}" @click="setLineWidth(item)"></li>
            </ul>
            <div class="operation">
		        <button class="clear">重画</button>
            </div>
        </div>
		<ul class="brush-color">
			<li v-for="(color, index) in colors" :key="index" :style="{background: color}" :class="{'active': selectColor === color}"  @click="setColor(color)"></li>
		</ul>
	</div>
    <!-- 工具栏END -->
</div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import io from "socket.io-client";
import { Draw } from "src/utils";

@Component({
  components:
  {
    
  }
})
export default class DrawView extends Vue {
    /**
     * 颜色集合。
     * @protected
     * @type {Array<string>}
     */
    protected colors: Array<string> = ["#409FFF", "#56D48F", "#FA7F32", "#E73935", "#AE6BF2", "#707CFF", "#EDB126", "#333333"];

    /**
     * 画笔宽度集合。
     * @protected
     * @type {Array<number>}
     */
    protected widths: Array<number> = [2, 4, 6];

    /**
     * 选中的画笔宽度。
     * @protected
     * @type {number}
     */
    protected selectWidth: number = 2;

    /**
     * 选中的画笔颜色。
     * @protected
     * @type {string}
     */
    protected selectColor: string = "#333333";

    /**
     * socket。
     * @protected
     * @type {any}
     */
    protected socket: any = null;

    /**
     * 画板实例。
     * @protected
     * @type {any}
     */
    protected drawCxt: any = null;

    /**
     * 展示canvas。
     * @protected
     * @type {any}
     */
    protected showCanvas: any = null;

    /**
     * 展示cxt。
     * @protected
     * @type {any}
     */
    protected showCxt: any = null;

    /**
     * 用户名。
     * @protected
     * @type {string}}}
     */
    protected userName: string = "";

    /**
     * 组件创建完成后的钩子函数。
     * @private
     * @returns {void}
     */
    protected created(): void
    {
        let self: any = this;
        if(this.$route.query.userName)
        {
            self.userName = this.$route.query.userName;
        }

        // 连接websocket后端服务器
        self.socket = io("ws://127.0.0.1:3000");

        // 接收回来的数据
        self.socket.on("pathData", (data: any) =>
        {
            self.show(data);
        });

        // 接收回来的数据
        self.socket.on("begin", (data: any) =>
        {
            self.showCxt.beginPath();
            self.showCxt.moveTo(
                data.clientX,
                data.clientY
            );
        });
        
        // 清空画布
        self.socket.on("clear", (data: any) =>
        {
            self.showCxt.clearRect(0, 0, self.showCanvas.width, self.showCanvas.height);
        });

        self.$nextTick(() =>
        {
            self.$refs.canvas.width = 500;
            self.$refs.canvas.height = 500;
            self.$refs.showCanvas.width = 500;
            self.$refs.showCanvas.height = 500;
            self.showCanvas = self.$refs.showCanvas;
            self.showCxt = self.showCanvas.getContext("2d");
            self.drawCxt = new Draw("canvas");
            let btn = document.getElementsByClassName("clear")[0];
            self.drawCxt.init(self.socket, btn);
        });
    }

    /**
     * 组件创建完成后的钩子函数。
     * @protected
     * @returns {void}
     */
    protected show(path: any): void
    {
        console.log(path);
        this.showCxt.strokeStyle = path.styleColor;
        this.showCxt.lineWidth = path.lineWidth;
        this.showCxt.lineTo(
           path.endX,
           path.endY
        );
        this.showCxt.stroke();
    }
  
    /**
     * 修改线条宽度。
     * @protected
     * @returns {void}
     */
    protected setLineWidth(value: number): void
    {
        this.drawCxt.setWidth(value);
        this.selectWidth = value;
    }
    /**
     * 
     * 修改线条颜色。
     * @protected
     * @returns {void}
     */
    protected setColor(value: string): void
    {
        this.drawCxt.setStyleColor(value);
        this.selectColor = value;
    }

}
</script>
<style lang="less">
.draw-view
{
	width: 100%;
    height: 100%;
	#canvas,#showCanvas
	{
		border: 1px solid #cccccc;
	}
	.utils
	{
        &-wrapper
        {
            display: flex;
            // justify-content: space-between;
            height: 50px;
            align-items: center;
            .brush-size
            {
                display: flex;
                flex-direction: row;
                align-items: center;
                width: 100px;
                li
                {
                    background: #000;
                    border-radius: 50%;
                    margin-left: 10px;
                    &.active
                    {
                       border:2px solid #409FFF;
                    }
                }
            }
            .operation
            {
                button
                {
                    width: 100px;
                    height: 35px;
                    border-radius: 20px;
                    cursor: pointer;
                    border: 1px solid #cccccc;
                    background: #cccccc;
                }   
                
            }
        }
		
        .brush-color
        {
           display: flex;
			flex-direction: row;
			justify-items: center;
			align-items: center;
			height: 50px;
			li
			{
                width: 50px;
                height: 50px;
                &.active
                {
                    border: 1px solid #000;
                }
            }
        }
	}
}
</style>

