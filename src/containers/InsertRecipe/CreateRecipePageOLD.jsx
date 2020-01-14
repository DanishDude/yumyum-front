import React from 'react';
import InsertRecipe from './InsertRecipe';
import './CreateRecipePage.scss';

class CreateRecipePageOLD extends React.Component {
  
  addRecipe = (values) => {
    const token = window.localStorage.getItem('token');
    let fd = new FormData();

    for (const [key, value] of Object.entries(values)) {
      if (key === 'image') {
        fd.append('recipeImage', value, value.name);
      } else {
        fd.append(key, value);
      };
    };

    const options = {
      method: 'POST',
      body: fd,
      headers: { 'Authorization': 'Bearer ' + token }
    };

    fetch('http://localhost:5000/api/recipe', options)
    .then(res => {
      if (res.status === 500) {
        alert('Error adding recipe')
        console.log(res);
      } else if (res.status === 201) {
        return res.json();
      }
    })
    .then(() => (this.props.history.push(`/recipes`)))
    .catch(err => {
      alert(err);
      console.log(err);
    });
  }

  render() {
    
    return (
      <div className="CreateRecipePage">
        <InsertRecipe onSubmit={this.addRecipe} />
      </div>
    )};
};

export default CreateRecipePageOLD;
