# useBoolean Hook

Ejemplo : 

  const [isError, setIsError] = useBoolean(false)

    useEffect(() => {
        setIsLoading.on()
        fetch(...)
            .then(res => res.json())
            .then(setArticles)
            .catch(setIsError.on)
            .finally(setIsLoading.off)
  }, [])