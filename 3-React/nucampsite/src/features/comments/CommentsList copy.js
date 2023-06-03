/*import { useSelector } from 'react-redux';
import { addComment } from './commentsSlice';
import { Col, Button, Modal, ModalHeader } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';
import CommentForm from './CommentForm';
import React, { useState } from 'react';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const CommentsList = ({ campsiteId }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const comments = useSelector(selectCommentsByCampsiteId(campsiteId));

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    if (comments && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />;
                })}
                <Button color="secondary" onClick={toggleModal}>
                    Add Comment
                </Button>
                <Modal isOpen={modalOpen} toggle={toggleModal}>
                    <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
                    <CommentForm campsiteId={campsiteId} setModalOpen={setModalOpen} />
                </Modal>
            </Col>
        );
    }
    return (
        <Col md='5' className='m-1'>
            There are no comments for this campsite yet.
            <Button color="secondary" onClick={toggleModal}>
                Add Comment
            </Button>
            <Modal isOpen={modalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
                <CommentForm campsiteId={campsiteId} setModalOpen={setModalOpen} />
            </Modal>
        </Col>
    );
};

export default CommentsList;*\

