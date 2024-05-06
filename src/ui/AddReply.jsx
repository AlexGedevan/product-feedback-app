import styled from "styled-components";
import Button from "./Button";

function AddReply({ alreadyreplied }) {
  return (
    <StyledAddReply alreadyreplied={alreadyreplied}>
      <ReplyInput type="text" alreadyreplied={alreadyreplied} />
      <Button width="11.7rem">Post Reply</Button>
    </StyledAddReply>
  );
}

export default AddReply;

const StyledAddReply = styled.div`
  margin-left: ${(props) => (props.alreadyreplied ? "11.7rem" : "7.2rem")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;

  & > button {
    align-self: flex-start;
  }
`;

const ReplyInput = styled.input`
  padding: 1.6rem 0rem 4.2rem 2.4rem;
  width: ${(props) => (props.alreadyreplied ? "75%" : "77%")};
`;
