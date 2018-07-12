import { JediModule } from './jedi.module';

describe('JediModule', () => {
  let jediModule: JediModule;

  beforeEach(() => {
    jediModule = new JediModule();
  });

  it('should create an instance', () => {
    expect(jediModule).toBeTruthy();
  });
});
