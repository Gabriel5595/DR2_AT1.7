import React from 'react';
import faker from 'faker';

function GeraPessoas() {
  const people = [];

  for (let i = 0; i < 100; i++) {
    const name = faker.name.findName();
    const email = faker.internet.email();
    const jobTitle = faker.name.jobTitle();
    const department = faker.commerce.department();

    people.push({ name, email, jobTitle, department });
  }

  return people;
}

function ListaDePessoas() {
  const people = GeraPessoas();

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Job Title</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person, index) => (
          <tr key={index}>
            <td>{person.name}</td>
            <td>{person.email}</td>
            <td>{person.jobTitle}</td>
            <td>{person.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListaDePessoas;
