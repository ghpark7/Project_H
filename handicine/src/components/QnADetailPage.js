import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './QnADetailPage.css';

const QnADetailPage = () => {
  const { id } = useParams(); // URL에서 질문글 ID 가져오기
  const [userRole, setUserRole] = useState('user'); // 현재 사용자의 등급 (예: 'user', 'admin' 등)
  const qna = {
    id,
    title: "전문가에게 질문하고 싶어요",
    author: "사용자1",
    date: "2024-09-01",
    content: "안녕하세요, 약사님. 최근에 두통이 심해서 타이레놀을 복용하고 있습니다. 그런데 타이레놀을 하루에 몇 번까지 복용할 수 있는지, 또 얼마나 오랜 기간 동안 복용해도 괜찮은지 궁금합니다. 장기 복용 시 간에 무리가 간다는 이야기를 들었는데, 이와 관련된 부작용이나 주의사항이 있을까요? 안전하게 복용할 수 있는 방법에 대해 알려주시면 감사하겠습니다.",
    comments: [
      { id: 1, author: "답변자1", content: "안녕하세요. 타이레놀의 경우 성인 기준으로 1회 500mg에서 1000mg까지 복용 가능하며, 하루 최대 4000mg(8정)을 넘지 않도록 주의해야 합니다. 복용 간격은 최소 4시간이며, 연속 복용 기간은 3일에서 5일을 넘기지 않는 것이 좋습니다. 장기 복용 시 간에 무리를 줄 수 있기 때문에, 필요 시 의사나 약사와 상의 후 복용하는 것이 안전합니다. 간 기능이 약한 경우 더욱 주의가 필요합니다." },
      { id: 2, author: "답변자2", content: "타이레놀은 간 대사를 통해 분해되기 때문에 장기 복용 시 간 손상 가능성이 있습니다. 특히 과다 복용이나 음주를 병행할 경우 간에 무리가 올 수 있으니 주의가 필요합니다. 일반적인 두통이나 통증 완화를 위해서는 타이레놀을 장기적으로 복용하기보다는 원인을 찾아 치료하는 것이 중요합니다. 타이레놀 복용 중 간 기능 이상 증상이 나타나면 즉시 복용을 중단하고 의사와 상담하세요."},
    ]
  };

  const handleReplyClick = () => {
    if (userRole === 'user') {
      alert('답변 권한이 없습니다.');
    } else {
      // 답글 달기 로직 (관리자나 전문가 등급만 답글을 달 수 있도록)
      console.log('답글을 작성할 수 있습니다.');
    }
  };

  return (
    <div className="qna-detail-page">
      <h1>{qna.title}</h1>
      <div className="author-date">
        <p>작성자: {qna.author}</p>
        <p>작성일: {qna.date}</p>
      </div>
      <div className="qna-content">
        <p>{qna.content}</p>
      </div>
      
      <div className="comments-section">
        <h2>답글</h2>
        {qna.comments.map((comment) => (
          <div key={comment.id} className="comment-item">
            <p><strong>{comment.author}</strong>: {comment.content}</p>
          </div>
        ))}
      </div>

      <div className="reply-button-container">
        <button onClick={handleReplyClick}>답글 달기</button>
      </div>
    </div>
  );
};

export default QnADetailPage;