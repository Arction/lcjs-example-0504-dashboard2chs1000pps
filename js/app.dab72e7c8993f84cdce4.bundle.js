(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const s=a(89),r=a(863),{lightningChart:n,AxisScrollStrategies:i,Themes:o}=s,{createProgressiveFunctionGenerator:l}=r,S=2*Math.PI*10,c=n().Dashboard({numberOfRows:1,numberOfColumns:2}),d=c.createChartXY({columnIndex:0,rowIndex:0,columnSpan:1,rowSpan:1}),g=c.createChartXY({columnIndex:1,rowIndex:0,columnSpan:1,rowSpan:1});d.setTitle("Vertical regressive"),d.getDefaultAxisY().setInterval({start:S,end:0,stopAxisAfter:!1}).setScrollStrategy(i.regressive);const p=d.addLineSeries({dataPattern:{pattern:"RegressiveY",regularProgressiveStep:!0}}).setDataCleaning({minDataPointCount:1e4}).setCursorSolveBasis("nearest-y");g.setTitle("Vertical progressive");const u=g.addAxisY(!0).setDefaultInterval((e=>({end:e.dataMax,start:(e.dataMax??0)-S,stopAxisAfter:!1}))).setScrollStrategy(i.progressive),h=g.addLineSeries({yAxis:u,dataPattern:{pattern:"ProgressiveY",regularProgressiveStep:!0}}).setDataCleaning({minDataPointCount:1e4}).setCursorSolveBasis("nearest-y");g.getDefaultAxisY().dispose(),l().setSamplingFunction(Math.sin).setEnd(2*Math.PI).setStep(.015).generate().setStreamBatchSize(20).setStreamInterval(20).setStreamRepeat(!0).toStream().forEach((e=>{p.add({x:e.y,y:-e.x})})),l().setSamplingFunction((e=>Math.sin(.5*e)+Math.sin(e)+Math.cos(1.5*e)+Math.cos(.25*e))).setEnd(100*Math.PI).setStep(.015).generate().setStreamBatchSize(20).setStreamInterval(20).setStreamRepeat(!0).toStream().forEach((e=>{h.add({x:e.y,y:e.x})}))}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);