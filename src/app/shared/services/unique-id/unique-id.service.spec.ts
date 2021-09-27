import { UniqueIdService } from "./unique-id.service";

//Describe pega o arquivo a ser testado
describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;

  beforeEach(() => {
    service = new UniqueIdService();
  });

  //aqui é passado o metodo a ser testado e o que se espera dele
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix("app");

    //aqui efetivamente o que se espera
    expect(id.startsWith("app-")).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate ids when called mutiples times`, () => {
    const service = new UniqueIdService();
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix("app"));
    }
    //aqui efetivamente o que se espera
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the number of generated ids when called`, () => {
    const service = new UniqueIdService();
    service.generateUniqueIdWithPrefix("app");
    service.generateUniqueIdWithPrefix("app");
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });
});
