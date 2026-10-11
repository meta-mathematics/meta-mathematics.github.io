# Compact-to-Hausdorff Continuous Bijection Theorem

## An End-to-End Metacognitive Mathematics Solution

**Problem:** GT-02 in the [local problem bank](problems.md).  
**Approach:** a Hybrid Five-Faculty Knowledge Graph whose agents own mathematical proof obligations.  
**Evidence status:** the complete mathematical argument is given below. Agent messages and repair episodes are explicitly illustrative; no deployed multi-agent run or proof-assistant certificate is claimed.

Every agent contains **Ego, Memory, Intellect, Sense, and Action**. Ego fixes its goal and coordinates publication; Memory holds definitions and proved imports; Intellect selects a strategy; Sense audits hypotheses and boundary conditions; Action executes deductions and checks the output. The faculty table describes these capacities inside each node, rather than five separate faculty agents.

Logical dependencies form a DAG. Iteration and diagnostic feedback belong to the orchestration layer. A diagnostic can request a revised proof but cannot establish a premise by assuming its downstream conclusion. Changed exports invalidate dependent certificates until they are rechecked. Numerical examples illustrate the argument; the universal conclusions follow from the proof.

## 1. Target Theorem and Contract

> If X is compact, Y is Hausdorff, and $f:X\to Y$ is a continuous bijection, then f is a homeomorphism.

A homeomorphism is a bijection continuous in both directions. The task is therefore to prove continuity of the inverse. The source X need not initially be assumed Hausdorff; the conclusion makes it homeomorphic to a Hausdorff space.

**Definitions:** compactness means every open cover has a finite subcover. Hausdorff means distinct points have disjoint open neighborhoods. A closed map sends closed subsets to closed subsets. The proof below derives the supporting compactness lemmas directly from these definitions.

## 2. Five-Agent Graph

```text
N1 Map contract → N2 Compact closed-set images ─┐
N1 → N3 Compact subsets of Hausdorff spaces ───┴→ N4 Inverse continuity → N5 Quotient-circle application
```

| Node | Memory | Sense | Intellect | Action | Ego |
|---|---|---|---|---|---|
| N1 Contract | Bijection and topology definitions | Check each hypothesis separately | Target inverse continuity | Fix inverse set-map | Frame homeomorphism |
| N2 Compact images | Open covers and preimages | Use closed source sets | Transfer finite-subcover property | Prove closed subsets and images compact | Supply image compactness |
| N3 Hausdorff closure | Disjoint neighborhoods | Use finite intersections after a finite subcover | Separate outsider from compact set | Prove compact subset closed | Supply target closure |
| N4 Inverse | Closed-set continuity criterion | Use bijection to identify preimages | Recognize f as closed map | Prove inverse continuous | Export theorem |
| N5 Application | Quotient universal property | Check endpoint equivalence exactly | Apply theorem to compact quotient | Prove circle homeomorphism | Demonstrate structural use |

## 3. Complete Proof with All Supporting Lemmas

### N1 — Fix the Missing Obligation

Bijectivity defines a set-map h=f^(−1):Y→X. Its continuity is not assumed. We will show that for every closed C in X, h^(−1)(C) is closed in Y. This closed-set criterion is equivalent to continuity by taking complements.

### N2 — Closed Subsets and Continuous Images Are Compact

Let C be closed in compact X. Any cover of C by relatively open sets can be represented by sets open in X. Add the open complement X\C. These sets cover X, so finitely many suffice. Removing the complement leaves a finite subcover of C. Thus C is compact.

Now let K be compact and g:K→Z continuous. An open cover of g(K) pulls back under g to an open cover of K. Choose finitely many preimages covering K; their original sets cover g(K). Hence continuous images of compact sets are compact.

Apply these two lemmas to f restricted to C. The result is that f(C) is compact in Y.

### N3 — Compact Subsets of a Hausdorff Space Are Closed

Let K be compact in Hausdorff Y and choose y outside K. For every x in K choose disjoint open neighborhoods U_x of x and V_x of y. Finitely many U_x, say $U_{x_1},\ldots,U_{x_m}$, cover K. The intersection $V=\bigcap_{j=1}^mV_{x_j}$ is an open neighborhood of y disjoint from their union and thus from K.

Every point outside K has such a neighborhood, so Y\K is open and K is closed. If K is empty, closedness is immediate. Finiteness is essential: an arbitrary intersection of open neighborhoods need not be open.

### N4 — Close the Inverse-Continuity Bridge

For every closed C in X, N2 proves f(C) compact and N3 proves it closed in Y. Therefore f is a closed map. Since h is the inverse bijection,

$$h^{-1}(C)=f(C).$$

This is closed for every closed C, so h is continuous. The original f was continuous, and thus is a homeomorphism. $\square$

### N5 — Build a Circle from an Interval

Let Q be the quotient of [0,1] identifying only 0 with 1, and let q:[0,1]→Q be the quotient map. Define

$$g:Q\to S^1,\qquad g([t])=e^{2\pi it}.$$

It is well-defined because the endpoints have the same value. It is continuous by the quotient topology, since g composed with q is continuous. It is onto, and it is one-to-one because equal exponentials imply t−s is an integer; on [0,1] this gives either t=s or the identified endpoint pair.

The interval is compact, q is continuous and onto, so Q is compact by N2's lemma. The circle is Hausdorff as a subspace of R². N4 therefore proves g is a homeomorphism without needing to analyze inverse continuity separately at the glued endpoint.

## 4. Worked Certificate and Illustrative Messages

| Interaction | Evidence transferred |
|---|---|
| N1 → N2 | Arbitrary closed source subset C |
| N2 → N3 | Compact image f(C) |
| N3 → N4 | The image is closed because Y is Hausdorff |
| N4 → caller | Every closed inverse preimage is closed |
| N5 → N4 | Quotient-circle map is a continuous bijection with compact source and Hausdorff target |
| N4 → N5 | Quotient-circle homeomorphism certificate |

For the application, the inverse sends a point on the circle to an equivalence class of parameters. The quotient class removes the discontinuity that would occur if one insisted on choosing a single angle in a half-open interval.

## 5. Failure and Five-Faculty Repair

Consider the continuous bijection $f:[0,2\pi)\to S^1$, $f(t)=e^{it}$. The source is not compact. Points $e^{i(2\pi-1/n)}$ approach 1, but their inverse values approach 2π rather than f^(−1)(1)=0. Thus the inverse is discontinuous.

```json
{"node":"N1","state":"STALLED","failing_faculty":"Sense","failed_hypothesis":"compact source","observed":"half-open angle interval","repair_target":"source topology/model","blocked_export":"homeomorphism"}
```

Memory recalls the compactness requirement. Sense isolates the cut at angle zero. Intellect replaces the half-open representative model by the compact endpoint quotient. Action verifies the quotient map's continuity and bijectivity. Ego publishes the corrected homeomorphism and preserves the original counterexample as an explanation of why the repair was needed.

## 6. Boundary Audit and Exports

Hausdorffness cannot be dropped: the identity from [0,1] with its usual topology to the same set with the indiscrete topology is a continuous bijection from a compact source, but its inverse is not continuous. Bijectivity also matters: a continuous surjection may identify distinct points and need not have an inverse at all.

If both spaces are empty the conclusion is immediate. Finite intersections, rather than arbitrary intersections, are the decisive use of compactness in N3.

Export the closed-subset compactness lemma, continuous-image compactness lemma, Hausdorff compact-set closedness lemma, and the continuous-bijection criterion. The circle application supplies a concrete quotient-space example for later algebraic topology constructions.

## Evidence, Provenance, and Next Use

The proof is complete relative to the explicitly stated elementary definitions and supporting imports. The node outputs provide mathematical evidence for the stated theorem. Kernel verification would require a separate formalization of the exact statements and dependencies; the faculty labels themselves do not certify correctness.

**Mathematical reference:** [MIT Introduction to Topology: compactness and separation material](https://ocw.mit.edu/courses/18-901-introduction-to-topology-fall-2004/pages/lecture-notes/).

**Framework references:** [Meta-Math essay](../../../Agentic-Math/Essay.md), [Agentic Math book](../../../Agentic-Math/Book.md), and the [Bézout worked example](../../../1-Number-Theory/projects/euclidean-algorithm-and-bezout-identity.md). The node decomposition and demonstration messages are authored for this example.
