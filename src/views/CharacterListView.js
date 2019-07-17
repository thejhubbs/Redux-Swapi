import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters } from '../actions';


class CharacterListView extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      fetching: false
    }
  }

  componentDidMount() {
    this.props.getCharacters()
  }

  render() {
    if (this.props.fetching) {
      return <div>Loading...</div>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    fetching: state.charsReducer.fetching,
    characters: state.charsReducer.characters
  }
}

const mapDispatchToProps = {
  getCharacters
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterListView);
