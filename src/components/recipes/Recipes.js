import React from 'react'
import Recipe from './Recipe.js'

class Recipes extends React.Component {

    render() {
        if (!this.props.recipes) {
            // console.log(this.props)
            return (
                <h2>loading...</h2>
            )
        }
        else {
            // console.log(this.props)
            return (
                
                <ol>
                    {this.props.recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} userId={recipe.relationships.user.data.id.toString()}  currentUser={this.props.currentUser} />)}
                    {/* <Recipe /> */}
                </ol>
            )
        }
    }
}

export default Recipes