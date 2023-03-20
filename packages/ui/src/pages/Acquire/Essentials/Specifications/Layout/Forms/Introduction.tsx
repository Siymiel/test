import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Introduction() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  useEffect(() => {
    const params = new URLSearchParams();
    if (query) {
      params.append('completed', '0');
    } else {
      params.delete('completed');
    }
    navigate({ search: params.toString() });
  }, [query]);

  return (
    <>
      Introduction Form
      <form>
        <label>
          Name:
          <input type="text" name="name" value={query} onChange={onChange} />
        </label>
      </form>
    </>
  );
}
