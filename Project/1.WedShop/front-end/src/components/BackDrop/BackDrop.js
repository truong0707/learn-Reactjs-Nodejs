import './BackDrop.css'

export default function BackDrop(props){

    return (
        <>
        <div onClick={props.HandleCloseDrawerToggleClick} className='backdrop'></div>
        </>
    );
}