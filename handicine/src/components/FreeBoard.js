import React, { useState, useEffect } from 'react';
import './FreeBoard.css';
import { useNavigate } from 'react-router-dom';
import { Dropdown, DropdownButton, FormControl, InputGroup, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const FreeBoard = () => {
  const [contents, setContents] = useState([
    { id: 1, title: "고혈압 약 복용 후 부작용이 있었나요?", author: "사용자1", date: "2024-09-01"},
    { id: 2, title: "항생제 복용 후 위장장애를 겪은 분들 계신가요?", author: "사용자2", date: "2024-09-02"},
    { id: 3, title: "비타민D 보충제, 효과 있나요?", author: "사용자3", date: "2024-09-03"},
    { id: 4, title: "소염진통제 복용 후 속쓰림, 어떻게 해결하시나요?", author: "사용자4", date: "2024-09-04"},
    { id: 5, title: "수면제 복용 후 기억력 저하 경험하신 분?", author: "사용자5", date: "2024-09-05"},
    { id: 6, title: "프로바이오틱스 복용 후 변비가 좋아졌어요", author: "사용자6", date: "2024-09-06"},
    { id: 7, title: "철분제 복용 후 피로감 개선되었나요?", author: "사용자7", date: "2024-09-07"},
    { id: 8, title: "콜레스테롤 약 복용 후 근육통을 겪으신 분?", author: "사용자8", date: "2024-09-08"},
    { id: 9, title: "진정제 복용 후 졸음이 심해졌어요", author: "사용자9", date: "2024-09-09"},
    { id: 10, title: "다이어트 약 복용 후 식욕억제 효과 있나요?", author: "사용자10", date: "2024-09-10"},
  ]);

const [searchOption, setSearchOption] = useState("제목만");
const [searchText, setSearchText] = useState("");
const navigate = useNavigate();

const handleSearchOptionSelect = (option) => {
    setSearchOption(option);
};

const handleSearch = () => {
    console.log(`검색 옵션: ${searchOption}, 검색어: ${searchText}`);
};

const handleCreateContent = () => {
    navigate('/board/new');
};

const handleContentClick = (id) => {
    navigate(`/board/${id}`);
};

useEffect(() => {
    // 백엔드 API에서 데이터를 가져오는 로직을 추가할 수 있습니다.
}, []);

return (
    <div className="free-board">
      <h1>자유 게시판</h1>

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

      <div className="create-content-container">
        <Button variant="primary" className="create-content-btn" onClick={handleCreateContent}>새 게시글 작성</Button>
      </div>

      <div className="content-list">
        {contents.map((content) => (
          <div
            key={content.id}
            className="board-item"
            onClick={() => handleContentClick(content.id)}
          >
            <div className="board-item-content">
              <h2 className="board-item-title">{content.title}</h2>
              <div className="board-item-info">
                <span className="board-item-author">{content.author}</span>
                <span className="board-item-date">{content.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeBoard;