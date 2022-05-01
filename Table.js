import React from "react";

export default class Table extends React.Component {
     data = [{"id.orig_p":49253,"resp_pkts":12,"resp_ip_bytes":13573,"orig_bytes":952,"id.resp_p":5357,"orig_ip_bytes":1284,"orig_pkts":8,"missed_bytes":0,"history":"ShADadfF","duration":0.009123000000002435,"uid":"CYYmcC15PCrgLUTnTg","resp_bytes":13081,"resp_l2_addr":"08:00:27:29:fe:60","service":"http","conn_state":"SF","proto":"tcp","id.orig_h":"192.168.1.4","orig_l2_addr":"08:00:27:55:26:1c","ts":19.301985,"id.resp_h":"192.168.1.5"}, {"id.orig_p":49253,"resp_pkts":6,"resp_ip_bytes":6124,"orig_bytes":235,"id.resp_p":2869,"orig_ip_bytes":483,"orig_pkts":6,"missed_bytes":0,"history":"ShADdR","duration":60.01610600000001,"uid":"CIxibN2vc4Yt0lGU1g","resp_bytes":5876,"resp_l2_addr":"08:00:27:55:26:1c","service":"http","conn_state":"RSTO","proto":"tcp","id.orig_h":"192.168.1.5","orig_l2_addr":"08:00:27:29:fe:60","ts":18.186195,"id.resp_h":"192.168.1.4"}]
    constructor(props){
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
    }
    
    getKeys = function(){
        return Object.keys(this.props.data[0]|| {});
    }
    
    getHeader = function(){
        var keys = this.getKeys();
        return keys.map((key, index)=>{
        return <th key={key}>{key.toUpperCase()}</th>
        })
    
    }
    
    getRowsData = function(){
        var items = this.props.data;
 var keys = this.getKeys();
 return items.map((row, index)=>{
 return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
 })
    
    }
    
    render() {
    return (
    <div>
    <table>
    <thead>
    <tr>{this.getHeader()}</tr>
    </thead>
    <tbody>
    {this.getRowsData()}
    </tbody>
    </table>
    </div>
    
    );
    }
   }
   const RenderRow = (props) =>{
    return props.keys.map((key, index)=>{
        return <td key={props.data[key]}>{props.data[key]}</td>
        })
    
   }