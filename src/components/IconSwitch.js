import Icon from '@material-ui/core/Icon'; 


export default function IconSwitch(props) {
  console.log(props)
  return (
    <button className='button'
      key={Math.random()} 
      onClick={props.onSwitch}
    >
      <div className='icon'>
        <Icon>{props.icon}</Icon>
      </div> 
    </button>       
  )
}

IconSwitch.propTypes = {
  
}