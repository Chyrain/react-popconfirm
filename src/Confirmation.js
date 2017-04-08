import React from 'react';
import {Popover, Button, ButtonToolbar} from 'react-bootstrap';
import { confirmable } from './react-confirm.js';

class Confirmation extends React.Component {
  render() {
    var {
      okLabbel = 'Yes',
      cancelLabel = 'No',
      okStyle = 'info',
      cancelStyle = 'default',
      element,
      confirmation,
      confirmationColor = '#e83f3f',
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
      // windth:160 height:70
      // arrow 22x10
      switch (placement) {
        case 'top': {
          positionLeft = x + element.clientWidth/2 - width/2;
          positionTop = y - 10 - 66;
          break;
        }
        case 'bottom': {
          positionLeft = x + element.clientWidth/2 - width/2;
          positionTop = y + 10 + element.clientHeight;
          break;
        }
        case 'left': {
          positionLeft = x - width - 10;
          positionTop = y + element.clientHeight/2 - height/2;
          break;
        }
        case 'right': {
          positionLeft = x + 10 + element.clientWidth;
          positionTop = y + element.clientHeight/2 - height/2;
          break;
        }
      }
    }
    //title={title || content} 
    return (
      <div className="static-confirm">
        <Popover id="pop-confirm"
          style={{width:width+'px',height:height+'px'}}
          show={show}
          onHide={dismiss}
          placement={placement} 
          positionLeft={positionLeft} 
          positionTop={positionTop}>
          <p style={{margin:0,padding:'.3em 0',fontSize:'small',color:confirmationColor}}>{confirmation}</p>
          <ButtonToolbar style={{paddingBottom:'6px', float:'right'}}>
            <Button bsSize="xsmall" bsStyle={cancelStyle} onClick={cancel}>{cancelLabel}</Button>
            <Button bsSize="xsmall" bsStyle={okStyle} onClick={proceed}>{okLabbel}</Button>
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
  element: React.PropTypes.object,
  confirmationColor: React.PropTypes.string,
  okStyle: React.PropTypes.string,
  cancelStyle: React.PropTypes.string
}

export default confirmable(Confirmation);
