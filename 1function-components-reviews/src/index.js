//jshint esversion:8

import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            
            <ApprovalCard>
                <div>
                    <h4>
                        Warning!
                    </h4>
                </div>
                Are you sure?
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                author="Sam"  
                timeAgo="today at 2:25pm" 
                commentText="Amazing!!!" 
                avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author="Suvi" 
                timeAgo="today at 3:45pm"
                commentText="Helpful!!!" 
                avatar={faker.image.avatar()}
            />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author="vs"   
                timeAgo="today at 4:55pm" 
                commentText="Awesome best!!!" 
                avatar={faker.image.avatar()}
            />
            </ApprovalCard>

        </div>
    );
};

ReactDom.render(<App/> , document.querySelector('#root'));