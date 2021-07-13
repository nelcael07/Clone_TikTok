const RecomendCard = ({recomend}) => {
  return (
    <Container>
      <Avatar src={recomend.avatar}></Avatar>
      <Info>
        <a> {recomend.title}</a>
        <span>{recomend.views}</span>
      </Info>
    </Container>
  );
}

export default RecomendCard;
