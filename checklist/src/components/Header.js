
function Header({ value }) {
  let today = new Date();
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  let getFullDate = today.toLocaleDateString('ko-KR', options);
  let day = today.toLocaleDateString('ko-KR', { weekday: 'long' });

  return (
    <>
      <div className='header'>
        <h1>{getFullDate}</h1>
        <span>{day}</span>
        <h6>할 일 {value}개 남음</h6>
      </div>
    </>
  );
}

export default Header;