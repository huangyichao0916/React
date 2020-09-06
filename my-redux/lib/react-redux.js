import React,{createContext} from 'react';

const context = createContext();

class Provider extends React.Component{
    render(){
        const {store} = this.props;

        return(
            <context.Provider value={store}>
                {this.props.children}
            </context.Provider>
        )
    }
}

function connect(mapStateToProps,mapDispatchToProps){
    return function(Com){
        return class ConnectedCom extends React.Component{
            render(){
                const filterProps = {};
                if (mapStateToProps) {
                    filterProps = Object.assign(filterProps,mapStateToProps())
                }
                if (mapDispatchToProps) {
                    filterProps = Object.assign(filterProps,mapDispatchToProps())
                }

                return(
                    <context.Consumer>
                        <Com {...filterProps} {...this.props}/>
                    </context.Consumer>
                )
            }
        }
    }
}

export default{
    context,
    Provider,
    connect,
}