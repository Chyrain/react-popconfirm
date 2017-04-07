import React from 'react';
import {Popover, Button, ButtonToolbar} from 'react-bootstrap';
import { confirmable } from './react-confirm.js';

class Confirmation extends React.Component {
  render() {
    var {
      okLabbel = 'Yes',
      cancelLabel = 'No',
      element,
      confirmation,
      show,
      proceed,
      dismiss,
      cancel,
      placement = 'top',
      positionLeft,
      positionTop,
      width = 160,
      height = 70
    } = this.props;
    if (element && (!positionLeft || !positionTop)) {
      var {x, y} = this.getElementPosition(element);
      var padding = {
        left: Number.parseInt(this.getStyle(element, 'paddingLeft')),
        right: Number.parseInt(this.getStyle(element, 'paddingRight')),
        top: Number.parseInt(this.getStyle(element, 'paddingTop')),
        bottom: Number.parseInt(this.getStyle(element, 'paddingBottom'))
      }
      // windth:160 height:70
      // arrow 22x10
      switch (placement) {
        case 'top': {
          positionLeft = x + element.clientWidth/2 - width/2 + padding.left;
          positionTop = y - 10 - 66 + padding.top;
          break;
        }
        case 'bottom': {
          positionLeft = x + element.clientWidth/2 - width/2 + padding.left;
          positionTop = y + 10 + padding.bottom + padding.top + element.clientHeight;
          break;
        }
        case 'left': {
          positionLeft = x - width - 10 + padding.left;
          positionTop = y + element.clientHeight/2 - height/2 + padding.top;
          break;
        }
        case 'right': {
          positionLeft = x + 10 - padding.right;
          positionTop = y + element.clientHeight/2 - height/2 + padding.top;
          break;
        }
      }
    }
    //title={title || content} 
    return (
      <div className="static-confirm">
        <Popover id="pop-confirm"
          style={{width:width+'px',height:height+'px',padding:'6px'}}
          show={show}
          onHide={dismiss}
          placement={placement} 
          positionLeft={positionLeft} 
          positionTop={positionTop}>
          <p style={{margin:0,padding:'.5em .3em',fontSize:'small',color:'#e83f3f'}}>{confirmation}</p>
          <ButtonToolbar style={{paddingBottom:'6px', float:'right'}}>
            <Button bsSize="xsmall" onClick={cancel}>{cancelLabel}</Button>
            <Button bsSize="xsmall" className='button-l' bsStyle="info" onClick={proceed}>{okLabbel}</Button>
          </ButtonToolbar>
        </Popover>
      </div>
    )
  }
  getElementPosition(e) {
    var x = 0, y = 0;
    while (e != null) {
      x += e.offsetLeft;
      y += e.offsetTop;
      e = e.offsetParent;
    }
    return { x: x, y: y };
  }
  getStyle(obj, attr) {
    if(obj.currentStyle){ 
      return obj.currentStyle[attr]; 
    } 
    else{ 
      return window.getComputedStyle(obj,null)[attr]; 
    }
  }
}

Confirmation.propTypes = {
  okLabbel: React.PropTypes.string,
  cancelLabel: React.PropTypes.string,
  confirmation: React.PropTypes.string,
  show: React.PropTypes.bool,
  proceed: React.PropTypes.func,     // called when ok button is clicked.
  cancel: React.PropTypes.func,      // called when cancel button is clicked.
  dismiss: React.PropTypes.func,     // called when backdrop is clicked or escaped.
  placement: React.PropTypes.string, // top, bottom, left, right
  positionLeft: React.PropTypes.number,
  positionTop: React.PropTypes.number,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  element: React.PropTypes.object
}

export default confirmable(Confirmation);
