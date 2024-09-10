import React, { useState, useEffect } from 'react';
import './Pharmacy.css';
import { FaSearch } from 'react-icons/fa'; // 돋보기 아이콘

const Pharmacy = () => {
  const [pharmacies, setPharmacies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPharmacies = async () => {
      const mockData = [
        { id: 1, name: "서울약국", address: "서울시 종로구 123-45", distance: "500m" },
        { id: 2, name: "강남약국", address: "서울시 강남구 678-90", distance: "1.2km" },
        { id: 3, name: "명동약국", address: "서울시 중구 명동 101-12", distance: "2km" },
        { id: 4, name: "홍대약국", address: "서울시 마포구 홍대로 45-6", distance: "3.5km" },
        { id: 5, name: "건대약국", address: "서울시 광진구 건대로 78-9", distance: "4.2km" },
        { id: 6, name: "잠실약국", address: "서울시 송파구 올림픽로 34-5", distance: "5km" },
      ];
      setPharmacies(mockData);
    };

    fetchPharmacies();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="pharmacy-page">
      <h1>주변 약국 찾기</h1>

      <div className="search-bar">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="현위치를 입력해주세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">
            <FaSearch />
          </span>
        </form>
      </div>

      <div className="pharmacy-list">
        {pharmacies.map((pharmacy) => (
          <div key={pharmacy.id} className="pharmacy-item">
            <div className="pharmacy-item-content">
              <h2>{pharmacy.name}</h2>
            </div>
            <div className="pharmacy-item-right">
              <p>{pharmacy.address}</p>
              <p>{pharmacy.distance}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pharmacy;