(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const s=a(89),r=a(863),{lightningChart:n,AxisScrollStrategies:o,Themes:i}=s,{createProgressiveFunctionGenerator:l}=r,c=2*Math.PI*10,d=n({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).Dashboard({theme:i[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0,numberOfRows:1,numberOfColumns:2}),S=d.createChartXY({columnIndex:0,rowIndex:0,columnSpan:1,rowSpan:1}),h=d.createChartXY({columnIndex:1,rowIndex:0,columnSpan:1,rowSpan:1});S.setTitle("Vertical regressive"),S.getDefaultAxisY().setInterval({start:c,end:0,stopAxisAfter:!1}).setScrollStrategy(o.regressive);const g=S.addLineSeries({dataPattern:{pattern:"RegressiveY",regularProgressiveStep:!0}}).setDataCleaning({minDataPointCount:1e4}).setCursorSolveBasis("nearest-y");h.setTitle("Vertical progressive");const m=h.addAxisY(!0).setDefaultInterval((e=>({end:e.dataMax,start:(e.dataMax??0)-c,stopAxisAfter:!1}))).setScrollStrategy(o.progressive),u=h.addLineSeries({yAxis:m,dataPattern:{pattern:"ProgressiveY",regularProgressiveStep:!0}}).setDataCleaning({minDataPointCount:1e4}).setCursorSolveBasis("nearest-y");h.getDefaultAxisY().dispose(),l().setSamplingFunction(Math.sin).setEnd(2*Math.PI).setStep(.015).generate().setStreamBatchSize(20).setStreamInterval(20).setStreamRepeat(!0).toStream().forEach((e=>{g.add({x:e.y,y:-e.x})})),l().setSamplingFunction((e=>Math.sin(.5*e)+Math.sin(e)+Math.cos(1.5*e)+Math.cos(.25*e))).setEnd(100*Math.PI).setStep(.015).generate().setStreamBatchSize(20).setStreamInterval(20).setStreamRepeat(!0).toStream().forEach((e=>{u.add({x:e.y,y:e.x})}))}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);