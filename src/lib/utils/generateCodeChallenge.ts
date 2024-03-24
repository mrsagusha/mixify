const generateCodeChallenge = async (codeVerifier: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest('SHA-256', data);

  const buffer: number[] = [];

  new Uint8Array(digest).forEach((value) => buffer.push(value));

  return btoa(String.fromCharCode.apply(null, buffer)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

export { generateCodeChallenge };
