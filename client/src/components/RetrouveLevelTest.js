import React, {Component} from 'react';
import TestLevel from './learn-spanish';
export default class extends Component {
    render() {
        const {allLevelTest, onLevelTestClick,dleLevelTestClick} = this.props;
        return (
            <ul className="list-LevelTest">
                {allLevelTest.map(allLevelTest => {
                    return (
                        <TestLevel
                            key={todo.id}
                            {...todo}
                            onClick={() => onLevelTestClick(level-test.id)}
                            delClick={() => dleTodoClick(level-test.id)}
                        />)
                    }
                )}
            </ul>
        )
    }
}