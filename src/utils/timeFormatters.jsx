export function formatDate (epochTime){
    const date = new Date(epochTime);
    return date.toLocaleDateString();
  };