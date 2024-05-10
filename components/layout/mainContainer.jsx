const MainContainer = (props) => {
    return (
        <div className={`grid mainWrapper !pb-36 lg:pb-24 grid-cols-12 gap-8 m-auto ${props.width}`}>
            {props.children}
        </div>
    );
};

export default MainContainer;
