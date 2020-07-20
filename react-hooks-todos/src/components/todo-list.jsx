import React from 'react';
import {List,Icon} from 'antd';
const {Item} = List;
import classNames from 'classnames';

const ToDoList = ({todos,onToggleFinished}) => {
    const onDelete = e => {

    }

    return (
        <div className="list-wrap">
            {todos.length === 0 ? 
            (
                <p>暂无待办事项</p>
            ):
            (
                <List 
                    itemLayout="horizontal"
                    dataSource={todos}
                    renderItem={({id,text,finished},index) => {
                        const itemClasses = classNames({
                            'list-item':true,
                            'list-item_finished':finished,
                        });
                        <Item className={itemClasses}>

                        </Item>
                    }}
                />
            )}
        </div>
    )
}

export default ToDoList;