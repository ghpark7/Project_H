import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './QnADetailPage.css';

const QnADetailPage = () => {
  const { id } = useParams(); // URL에서 질문글 ID 가져오기
  const [userRole, setUserRole] = useState('user'); // 현재 사용자의 등급 (예: 'user', 'admin' 등)
  const qna = {
    id,
    title: "타이레놀 복용 시 주의사항 및 장기 복용에 대한 문의",
    author: "박건휘",
    date: "2024-09-01",
    content: <>
    안녕하세요, 약사님. 최근 들어 두통이 점점 심해져서 일상생활에 지장이 있을 정도입니다. 그래서 주변의 권유로 타이레놀을 복용하기 시작했는데, 효과는 있지만 몇 가지 궁금한 점이 생겨 이렇게 문의드립니다. <br /><br />
    우선, 타이레놀을 하루에 최대 몇 번까지 복용할 수 있는지 알고 싶습니다. 제품 설명서에는 일반적인 복용 방법이 나와 있지만, 제 상황에 맞게 정확히 어떻게 복용해야 할지 몰라서요. 또한, 두통이 지속되어 며칠간 연속으로 복용해도 되는지, 아니면 일정 기간 복용 후 휴식이 필요한지도 궁금합니다.<br /><br />
    그리고 장기 복용 시 간에 무리가 갈 수 있다는 이야기를 들었는데요, 이와 관련된 구체적인 부작용이나 주의사항이 있을까요? 제가 간 건강에 대해 특별히 문제가 있지는 않지만, 혹시나 하는 걱정이 됩니다. 타이레놀 복용 중 피해야 할 음식이나 약물도 있는지 알고 싶습니다.<br /><br />
    마지막으로, 두통을 근본적으로 완화하거나 예방할 수 있는 방법이 있다면 조언 부탁드립니다. 단순히 진통제로 증상을 완화하는 것보다 원인을 해결하는 것이 좋을 것 같아서요. 안전하게 타이레놀을 복용하면서 두통 관리에 도움이 될 수 있는 방법에 대해 자세히 알려주시면 정말 감사하겠습니다.
  </>,
    comments: [
      { id: 1, author: "약사 박성모", content: <>
        안녕하세요, 두통으로 인해 타이레놀을 복용하고 계신데, 몇 가지 주의사항과 복용 방법에 대해 설명드리겠습니다.<br /><br />
        우선, 성인 기준으로 타이레놀(아세트아미노펜)의 1회 권장 복용량은 500mg에서 1000mg 사이이며, 하루 최대 복용량은 4000mg(약 8정)을 넘지 않아야 합니다. 복용 간격은 최소 4시간을 유지해야 하고, 연속 복용 기간은 3일에서 5일을 넘기지 않는 것이 좋습니다. 만약 5일 이상 지속적으로 두통이 발생한다면, 원인을 파악하기 위해 병원에서 진료를 받는 것이 중요합니다.<br /><br />
        장기 복용 시 간에 무리를 줄 수 있기 때문에 주의가 필요합니다. 특히 간 기능이 약하거나 음주를 자주 하는 경우에는 타이레놀 복용을 자제하는 것이 좋습니다. 간이 타이레놀을 대사하는데, 과도한 복용은 간 손상을 일으킬 수 있습니다. 간 기능 이상을 나타내는 증상(예: 황달, 어지러움, 피로감 등)이 나타나면 즉시 복용을 중단하고 의사와 상의하세요.<br /><br />
        또한, 타이레놀 복용 중 피해야 할 음식이나 약물에 대해서는 크게 제한은 없으나, 타이레놀과 유사한 성분을 포함한 다른 진통제(예: 이부프로펜 등)와는 병용하지 않는 것이 좋습니다. 과도한 카페인 섭취도 피하는 것이 도움이 됩니다.<br /><br />
        마지막으로, 두통을 완화하는 근본적인 방법으로는 규칙적인 생활습관, 충분한 수면, 스트레스 관리 등이 있습니다. 만약 만성 두통으로 이어진다면, 의사와 상의하여 적절한 치료를 받는 것이 중요합니다.
      </>},
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
        <div className="comments-header">
          <h2>답변</h2>
          <div className="reply-button-container">
            <button onClick={handleReplyClick}>답변 달기</button>
          </div>
        </div>
        {qna.comments.map((comment) => (
          <div key={comment.id} className="comment-item">
            <p><strong>{comment.author}</strong>: {comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QnADetailPage;