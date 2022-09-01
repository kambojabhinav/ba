<script>
   const ChildComponent=()={
    return (
        <div>
            <p>I am the child</p>
        </div>
    );
   };

   class ParentComponent extends React.component{
    constructor(props)
    super(props)
    render(){
        return(
    <div>
        <p>hi there</p>
        <ChildComponent />
    </div>
        );
}
}
</script>

<script>

    const TypesOfFruit=()=>{
        return(
            <div>
                <ul>
                    <li>Apples</li>
                    <li>Oranges</li>
                    <li>Bananas</li>
                    <li>Grapes</li>
                </ul>
            </div>
        );
    };

    const Fruit=()=>{
        return(
            <div>
            <TypesOfFruit/>
            </div>
        );
    };

    class Fr extends React.Component{
        constructor(props){
            super(props);
        }
        render(){
            return(
                <div>
                <Fruit/>
                </div>
            );
        }
    };
</script>