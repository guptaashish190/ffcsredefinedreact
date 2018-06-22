function changeTheme(theme) {
  return {
    type: 'CHANGE_THEME',
    payload: theme,
  };
}

export default { changeTheme };
