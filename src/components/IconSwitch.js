import Icon from '@material-ui/core/Icon'; 


export default function IconSwitch(props) {
  return (
    <button className="button"
      key={Math.random()} 
      onClick={props.onSwitch}
    >
      <div>
        <Icon className="itemIcon">{props.icon}</Icon>
      </div> 
    </button>       
  )
}
