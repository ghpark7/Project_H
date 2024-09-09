import React, { useState, useEffect } from 'react';
import './Pharmacy.css';

const Pharmacy = () => {
  const [pharmacies, setPharmacies] = useState([]);

  useEffect(() => {
    const fetchPharmacies = async () => {
      const mockData = [
        { id: 1, name: "서울약국", address: "서울시 종로구 123-45", distance: "500m" },
        { id: 2, name: "강남약국", address: "서울시 강남구 678-90", distance: "1.2km" },
        { id: 3, name: "명동약국", address: "서울시 중구 명동 101-12", distance: "2km" },
        { id: 4, name: "홍대약국", address: "서울시 마포구 홍대로 45-6", distance: "3.5km" },
        { id: 5, name: "건대약국", address: "서울시 광진구 화양동 789", distance: "4km" },
      ];
      setPharmacies(mockData);
    };

    fetchPharmacies();
  }, []);

  return (
    <div className="pharmacy-page">
      <h1>주변 약국 찾기</h1>

      <div className="search-bar">
        <input type="text" placeholder="약국 이름 또는 주소를 입력하세요" />
        <button type="submit">검색</button>
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