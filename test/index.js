const js = import("@nzsc/nzsc_single_player_wasm_json_interface/nzsc_single_player_wasm_json_interface.js");
js.then(js => {
  const seed = 0xbabecaf3;
  const game = js.SinglePlayerNZSCWebInterface.new(seed);

  const toObj = (output) => {
    return {
      question: JSON.parse(output.question()),
      notifications: JSON.parse(output.notifications()),
    };
  };

  const logOutput = (output) => {
    console.log(toObj(output));
  }

  logOutput(game.initial_output());
  logOutput(game.next('Ninja'));
  logOutput(game.next('Clown'));
});
