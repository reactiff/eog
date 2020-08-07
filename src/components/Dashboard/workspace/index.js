import React from 'react';
import xo from 'exograph';
import './css/exograph.css';
import './css/menu.css';
import './css/accordion.css';
import widgets from '../../widgets' ;
import initDataAggregator from './data/initDataAggregator';

export default () => (
    <div className="flex column padded">
{/* 
        <xo.GraphNode 
            menuItem
            name="Gauge" 
            allowDrag={false}
            allowDrop={true} 
            placeholder={<GaugeIcon />}
            render={(props, ref) => {
                const { data, children, datasources, scope, setData, className, ...other } = props;
                return (
                    <div ref={ref} className={`flex canvas ${className}`} {...other}>
                        
                    </div>
                );
            }} 
            meta={{
                type: 'widget.gauge',
                accept: [ 'data.source' ],
            }}
        /> */}

        <xo.GraphNode 
            menuItem
            name="LineChart" 
            allowDrag={false}
            allowDrop={true} 
            placeholder={<LineChartIcon />}
            render={(props, ref) => {
                const { data, children, datasources, scope, setData, ...other } = props;
                initDataAggregator(props);
                return widgets.LineChart({...other, data: data.timeseries, children}, ref);
            }} 
            meta={{
                type: 'widget.lineChart',
                accept: [ 'data.source' ],
            }}
        />

    </div>
)


const GaugeIcon = (props) => {
    return <div className="relative placeholder"> 
        <div className="fill canvas flex align-center" style={{fontSize: '48pt'}}>
            {/* &#8631; */}
            {/* <widgets.Gauge id={'gaugeWidgetIcon'} /> */}
        </div>
    </div>
}

const LineChartIcon = (props) => {
    return <div className="relative placeholder"> 
        <div className="fill canvas flex align-center" style={{fontSize: '150pt', opacity: 0.1}}>
            &#8605;
        </div>
        <div className="fill canvas flex align-center" style={{fontSize: '12pt'}}>
            Line Chart
        </div>
    </div>
}
