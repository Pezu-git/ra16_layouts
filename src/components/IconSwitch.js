import Icon from '@material-ui/core/Icon'; 


export default function IconSwitch(props) {
  return (
    <button className='button'
      key={Math.random()} 
      onClick={props.onSwitch}
    >
      <div className='icon'>
        <Icon className='i'>{props.icon}</Icon>
      </div> 
    </button>       
  )
}
