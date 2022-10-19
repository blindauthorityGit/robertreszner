const MasterContainer = (props) => {
    return <div className={`grid grid-cols-12 gap-8 m-auto ${props.klasse}`}>{props.children}</div>;
};

export default MasterContainer;
