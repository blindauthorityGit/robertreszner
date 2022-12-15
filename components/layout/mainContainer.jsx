const MainContainer = (props) => {
    return <div className={`grid mainWrapper grid-cols-12 gap-8 m-auto ${props.width}`}>{props.children}</div>;
};

export default MainContainer;
