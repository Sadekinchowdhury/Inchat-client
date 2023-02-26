import React from 'react';
import { useQuery } from 'react-query';
import GetComment from './GetComment';

const Comment = ({ post }) => {
    console.log(post)

    const { data: getComment = [], refetch } = useQuery({
        queryKey: ['post/comment', post?._id],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/post/comment/${post?._id}`);
            const data = await res.json()
            refetch()
            return data;
        }

    })


    return (
        <div>
            <div>
                {
                    getComment.map(comments => <GetComment
                        comments={comments}
                        key={comments._id}
                        refetch={refetch}
                    ></GetComment>)
                }
            </div>


        </div>
    );
};

export default Comment;