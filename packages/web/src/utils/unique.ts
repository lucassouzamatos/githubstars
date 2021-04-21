export default <T>(values: T[], map = (value) => value) =>
  values.filter(
    (value, index, self) =>
      self.findIndex((selfValue) => map(selfValue) === map(value)) === index
  );
