import React, { useState, useEffect } from 'react';
import './QnAPage.css';
import { useNavigate } from 'react-router-dom';
import { Dropdown, DropdownButton, FormControl, InputGroup, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa'; // 돋보기 아이콘

const QnAPage = () => {
  const [questions, setQuestions] = useState([
    { id: 1, title: "타이레놀 복용 시 주의사항 및 장기 복용에 대한 문의", author: "박건휘", date: "2024-09-01" },
    { id: 2, title: "약물 복용 관련 질문이 있습니다", author: "사용자2", date: "2024-09-02" },
    { id: 3, title: "의학적인 질문을 하고 싶어요", author: "사용자3", date: "2024-09-03" },
    { id: 4, title: "약물 복용 관련 질문이 있습니다", author: "사용자4", date: "2024-09-04" },
    { id: 5, title: "전문가에게 질문하고 싶어요", author: "사용자5", date: "2024-09-05" },
    { id: 6, title: "의학적인 질문을 하고 싶어요", author: "사용자6", date: "2024-09-06" },
    { id: 7, title: "전문가에게 질문하고 싶어요", author: "사용자7", date: "2024-09-07" },
    { id: 8, title: "약물 복용 관련 질문이 있습니다", author: "사용자8", date: "2024-09-08" },
    { id: 9, title: "의학적인 질문을 하고 싶어요", author: "사용자9", date: "2024-09-09" },
]);

  const [searchOption, setSearchOption] = useState("제목만");
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate(); // useHistory 대신 useNavigate 사용

  const handleSearchOptionSelect = (option) => {
    setSearchOption(option);
  };

  const handleSearch = () => {
    console.log(`검색 옵션: ${searchOption}, 검색어: ${searchText}`);
    // 검색 기능을 추가할 때 사용할 검색 로직
  };

  const handleCreateQuestion = () => {
    navigate('/qna/new'); // history.push 대신 navigate 사용
  };

  const handleQuestionClick = (id) => {
    navigate(`/qna/${id}`);
  };

  useEffect(() => {
    // 백엔드 API에서 데이터를 가져오는 로직을 추가할 수 있습니다.
  }, []);

  return (
    <div className="qna-page">
      <h1>전문가 Q&A 게시판</h1>

      {/* 검색창 */}
      <div className="search-bar">
        <InputGroup className="custom-search">
          <DropdownButton
            variant="outline-secondary"
            title={searchOption}
            id="input-group-dropdown"
            onSelect={handleSearchOptionSelect}
          >
            <Dropdown.Item eventKey="제목">제목</Dropdown.Item>
            <Dropdown.Item eventKey="제목 + 게시글">제목 + 게시글</Dropdown.Item>
            <Dropdown.Item eventKey="작성자">작성자</Dropdown.Item>
            <Dropdown.Item eventKey="댓글내용">댓글내용</Dropdown.Item>
          </DropdownButton>
          <FormControl
            placeholder="검색어를 입력해주세요"
            aria-label="Search"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <InputGroup.Text className="search-icon" onClick={handleSearch}>
            <FaSearch style={{ color: 'green' }} />
          </InputGroup.Text>
        </InputGroup>
      </div>

      {/* 새로운 질문 등록 버튼 */}
      <div className="create-question-container">
        <Button variant="primary" className="create-question-btn" onClick={handleCreateQuestion}>새 질문글 작성</Button>
      </div>

      {/* 질문 리스트 */}
      <div className="qna-list">
        {questions.map((question) => (
          <div
            key={question.id}
            className="qna-item"
            onClick={() => handleQuestionClick(question.id)}
          >
            <div className="qna-item-content">
              <h2 className="qna-item-title">{question.title}</h2>
              <div className="qna-item-info">
                <span className="qna-item-author">{question.author}</span>
                <span className="qna-item-date">{question.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QnAPage;