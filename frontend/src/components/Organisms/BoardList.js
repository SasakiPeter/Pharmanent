import React, { Component } from 'react';
import { ListItem } from '../Atoms';

export default class extends Component {
    render() {
        // const boards = this.props.boards.map((b) =>
        //     <ListItem
        //         key={b.id}
        //         title={b.title}
        //         onClick={() => this.props.onBoardClick(b.id)} />
        // )

        return (
            <aside>
                <h3>新着</h3>
                {/* <ul>{boards}</ul> */}
            </aside>
        )
    }
}